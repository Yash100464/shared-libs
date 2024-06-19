import { render, fireEvent } from '@testing-library/react-native';
import {
  Card,
  CardContainerTestID,
  CardImageTestID,
  CardTitleTestID,
  CardPriceTestID,
  CardDescriptionTestID,
} from '../../index';

describe('Card', () => {
  const mockProps = {
    cardImg: 'https://example.com/image.jpg',
    onCardPress: jest.fn(),
    cardTitle: 'Test Card',
    price: '$100',
    description:
      'This is a test description that is quite long and should be truncated.',
  };

  it('renders correctly', () => {
    const { toJSON } = render(<Card {...mockProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('displays the correct title, price, and description', () => {
    const { getByTestId } = render(<Card {...mockProps} />);

    expect(getByTestId(CardTitleTestID).props.children).toBe('Test Card');
    expect(getByTestId(CardPriceTestID).props.children).toBe('$100');
    expect(getByTestId(CardDescriptionTestID).props.children).toBe(
      'This is a test description that is quite long and should be truncated.'
    );
  });

  it('truncates description correctly', () => {
    const { getByTestId } = render(<Card {...mockProps} />);
    const descriptionText = getByTestId(CardDescriptionTestID);
    expect(descriptionText.props.numberOfLines).toBe(2);
    expect(descriptionText.props.ellipsizeMode).toBe('tail');
  });

  it('calls onCardPress when card is pressed', () => {
    const { getByTestId } = render(<Card {...mockProps} />);
    fireEvent.press(getByTestId(CardContainerTestID));
    expect(mockProps.onCardPress).toHaveBeenCalled();
  });

  it('displays the image correctly', () => {
    const { getByTestId } = render(<Card {...mockProps} />);
    const image = getByTestId(CardImageTestID);
    expect(image.props.source.uri).toBe('https://example.com/image.jpg');
  });
});
