import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../spinner';


function ItemList({getData,onItemSelected, renderItems}) {


    const [itemList, updateList] = useState([]);

    useEffect(() =>{
        getData()
            .then( (data) => {
                updateList(data)
            })
    })

    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = renderItem(item);

            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={ () => onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }


    if (!data) {
        return <Spinner/>
    }

    const items = renderItem(item);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}
export default ItemList;

// const withData = (View, getData) => {
//     return class extends Component {
//         state = {
//             data: null
//         }
//         componentDidMount() {
//             getData()
//                 .then( (data) => {
//                     this.setState({
//                         data
//                     })
//                 })
//         }
//         render() {
//             const {data} = this.state;

//             if (!data) {
//                 return <Spinner/>
//             }
//             return <View {...this.props} data={data}/>
//         }
//     };
// }
// const {getAllCharacters} = new GotService();
// export default withData(ItemList, getAllCharacters);
