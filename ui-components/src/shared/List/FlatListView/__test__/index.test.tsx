import React from 'react';
import { render } from '@testing-library/react-native';
import { FlatListView, FlatListViewTestID } from '../../../index';
import { Text, View } from 'react-native';

const mockData = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const renderItem = ({ item }: any) => <Text>{item.title}</Text>;

const ItemSeparator = () => (
  <View style={{ height: 1, backgroundColor: 'gray' }} />
);

describe('FlatListView', () => {
  it('renders correctly and matches snapshot', () => {
    const { toJSON } = render(
      <FlatListView
        data={mockData}
        renderItem={renderItem}
        itemSeprator={ItemSeparator}
      />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('displays the correct number of items', () => {
    const { getAllByText } = render(
      <FlatListView
        data={mockData}
        renderItem={renderItem}
        itemSeprator={ItemSeparator}
      />
    );
    const items = getAllByText(/Item/);
    expect(items.length).toBe(mockData.length);
  });

  it('renders the separator correctly', () => {
    const { getAllByTestId } = render(
      <FlatListView
        data={mockData}
        renderItem={renderItem}
        itemSeprator={() => <View testID="separator" />}
      />
    );
    const separators = getAllByTestId('separator');
    expect(separators.length).toBe(mockData.length - 1);
  });

  it('has the correct test ID', () => {
    const { getByTestId } = render(
      <FlatListView
        data={mockData}
        renderItem={renderItem}
        itemSeprator={ItemSeparator}
      />
    );
    expect(getByTestId(FlatListViewTestID)).toBeTruthy();
  });
});
