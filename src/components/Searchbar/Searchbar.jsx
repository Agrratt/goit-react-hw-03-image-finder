import React, { Component } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as SearchIcon } from 'components/icons/searchIcon.svg';
import { SearchbarHeader, SearchForm, SearchButton, SearchButtonLabel, SearchInput } from 'components/Searchbar/Searchbar.styled';


export class Searchbar extends Component {
    state = {
        searchQuery: '',
    };

    static propTypes = {
    onSubmit: PropTypes.func
  };

    handleQueryChange = evt => {
        this.setState({ searchQuery: evt.currentTarget.value.toLowerCase() });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            toast.error('Алё, там пусто');
            return;
        };

        this.props.onSubmit(this.state.searchQuery);
                this.resetForm();
    };

    resetForm = () => {
        this.setState({ searchQuery: '' });
    }
        
    render() {
        return (
            <SearchbarHeader>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchButton type="submit">
                        <SearchIcon />
                        <SearchButtonLabel>Search</SearchButtonLabel>
                    </SearchButton>

                    <SearchInput
                        type="text"
                        name='searchQuery'
                        value={this.state.searchQuery}
                        autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleQueryChange}
                    />
                </SearchForm>
            </SearchbarHeader>
            
        );
     }   
    
};

