import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


import './app.css';
import styled from 'styled-components'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: false, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a break', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImpornant = this.onToggleImpornant.bind(this)
        this.onToggleLiked = this.onToggleLiked.bind(this)
        this.searchPosts = this.searchPosts.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)

        this.maxId = 4
    }

    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem=> elem.id === id)
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        });
    }
    addItem(body){
        const newItem = {
            label: body,
            important: false, 
            id: this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    onToggleImpornant(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem ,...after];

            return {
                data: newArr
            }
        })
    }
    onToggleLiked(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, newItem ,...after];

            return {
                data: newArr
            }
        })
    }
    searchPosts(items, term){
        if(term.length === 0){
            return items
        }
        return items.filter((item)=>{
            return item.label.indexOf(term) > -1
        })
    }
    onUpdateSearch(term){
        this.setState({term})
    }
    filterPost(items, filter){
        if(filter === 'like'){
            return items.filter(item => item.like);
        } else {
            return items
        }
    }
    onFilterSelect(filter){
        this.setState({filter})
    }
    render(){

        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length
        const allPosts = data.length

        const visiblePost = this.filterPost(this.searchPosts(data, term), filter);

        return (
            <AppBlock className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList  
                    posts={visiblePost}
                    onDelete={this.deleteItem}
                    onToggleImpornant={this.onToggleImpornant}
                    onToggleLiked={this.onToggleLiked}
                    />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </AppBlock>
        )
    }
}
