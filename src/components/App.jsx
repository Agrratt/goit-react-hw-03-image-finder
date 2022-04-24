import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import {fetchApi} from 'services/api';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Container } from 'components/App.styled';


export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    status: 'idle',
    page: '',  
    showModal: false,
    openModalImg: null
  };

  componentDidUpdate(prevProps, { page, searchQuery }) {
  if (searchQuery !== this.state.searchQuery || page !== this.state.page) {
      return this.getFetchImages(page, searchQuery);
    }
  };

  getFetchImages = () => {
    const { page, searchQuery } = this.state;

    this.setState({ status: 'pending' });
    
    fetchApi(page, searchQuery)
      .then(res => {
        this.setState(prevState => ({
          images: [...prevState.images, ...res],
          status: 'resolved'
        }));
      })
      .catch(error =>
        this.setState({ error, status: 'rejected' }));
  };

  handleSerchSubmit = (newQuery) => {
    if (this.state.searchQuery !== newQuery) {
      this.setState({
      searchQuery: newQuery,
      page: 1,
    });
    }  
  };

  loadMore = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  };

  openModalImg = image => {
    this.setState({ openModalImg: image });
  };
  

  render() {
    const { images, searchQuery, status, showModal, openModalImg } = this.state;
    
    return (
      <Container>
        <Searchbar onSubmit={this.handleSerchSubmit} />
        {status === 'resolved' && <ImageGallery images={images} onClickImage={this.toggleModal} openModalImg={this.openModalImg} />}
        {status === 'rejected' && <h1>{searchQuery}{this.state.error.message }</h1>}
        {status === 'pending' && <Loader />}
        {images.length > 0 && <Button loadMore={ this.loadMore}/>}
        {showModal && <Modal
          largeImage={openModalImg}
          onClose={ this.toggleModal} />}
          
        <ToastContainer autoClose={3000} />
      </Container>
    );
    
  }
  
};
