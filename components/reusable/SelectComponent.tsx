import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'الأكثر مشاهدة', label: 'الأكثر مشاهدة' },
  { value: 'الأحدث', label: 'الأحدث' },
  { value: 'الأكثر تصويتا', label: 'الأكثر تصويتا' },
];

class SelectComponent extends React.Component {
  state = {
    selectedOption: { value: 'الأكثر مشاهدة', label: 'الأكثر مشاهدة' },
  };
  handleChange = (selectedOption:any) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        className={"select-category"}
      />
    );
  }
}
export default SelectComponent