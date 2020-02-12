import classNames from 'classnames';
import React from 'react';

class DataListCell extends React.PureComponent {
    render() {
        const { row, column, className } = this.props;
        if (!column) return null;
        const { col_index, title } = column;
        const cell_value = row[col_index];

        return (
            <div className={classNames(className, column.col_index)}>
                <span className={classNames(`${column.col_index}__row__title`, 'data-list__row__title')}>{title}</span>
                <div className='data-list__row__content'>
                    {column.renderCellContent ? column.renderCellContent({ cell_value, row_obj: row }) : cell_value}
                </div>
            </div>
        );
    }
}

export default DataListCell;
