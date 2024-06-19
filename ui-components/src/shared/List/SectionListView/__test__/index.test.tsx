import { render } from '@testing-library/react-native';
import { SectionListView, SectionListViewTestID } from '../../../index';
import { Text } from 'react-native';

const mockData = [
  {
    title: 'Section 1',
    data: ['Item 1-1', 'Item 1-2'],
  },
  {
    title: 'Section 2',
    data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  },
];

const renderItem = ({ item }: any) => (
  <Text>{item}</Text>
);

const renderSectionHeader = ({ section }: any) => (
  <Text>{section.title}</Text>
);

describe('SectionListView', () => {
  it('renders correctly and matches snapshot', () => {
    const { toJSON } = render(
      <SectionListView
        data={mockData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('displays the correct number of items and sections', () => {
    const { getAllByText } = render(
      <SectionListView
        data={mockData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    );

    const sectionHeaders = getAllByText(/Section/);
    const items = getAllByText(/Item/);

    expect(sectionHeaders.length).toBe(mockData.length);
    expect(items.length).toBe(mockData.reduce((acc, section) => acc + section.data.length, 0));
  });

  it('has the correct test ID', () => {
    const { getByTestId } = render(
      <SectionListView
        data={mockData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    );
    expect(getByTestId(SectionListViewTestID)).toBeTruthy();
  });
});
