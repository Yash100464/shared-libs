import { SectionList } from 'react-native';

interface SectionListViewProps {
  data: any;
  renderItem: any;
  renderSectionHeader: any;
}
  
export const SectionListViewTestID = 'SectionListView:TestID';
export const SectionListView = (props: SectionListViewProps) => {
  const { data, renderItem, renderSectionHeader } = props;

  return (
    <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
        testID={SectionListViewTestID}
      />
  );
};
