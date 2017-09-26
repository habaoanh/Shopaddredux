import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
import Header from './Header';
import initData from '../../../api/initData';
import getCart from '../../../api/getCart';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            types: [],
            topProducts: [],
        };
    }

    componentDidMount() {
        const { cartArray } = this.props;
        initData()
        .then(resJSON => {
            const { type, product } = resJSON;
            this.setState({ types: type, topProducts: product });
        });
        getCart().then({ cartArray });
        console.log('------------------');
        console.log(cartArray);
        console.log('------------------');
    }
    

    render() {
        const { types, topProducts } = this.state;
        return (
             <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                 <Header navigation={this.props.navigation} />
                 <Collection />
                 <Category navigation={this.props.navigation} types={types} />
                 <TopProduct navigation={this.props.navigation} topProducts={topProducts} />
             </ScrollView>
             
        );
    }
}

function mapStateToProps(state) {
    return { 
        cartArray: state.cartArray
    };
}

export default connect(mapStateToProps)(Home);
