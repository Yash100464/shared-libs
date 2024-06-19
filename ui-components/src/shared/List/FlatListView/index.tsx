import { FlatList } from 'react-native';

interface FlatListViewProps {
  data: any;
  itemSeprator?: any;
  renderItem: any;
}

export const FlatListViewTestID = 'FlatListView:TestID';

export const FlatListView = (props: FlatListViewProps) => {
  const { data, itemSeprator ,renderItem } = props;
  return (
    <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={itemSeprator}
        testID={FlatListViewTestID}
      />
  );
};
