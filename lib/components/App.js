import React from 'react';
import axios from 'axios';

import DataApi from 'state-api';
// import { data } from '../data';

import ArticleList from './ArticleList';

// const api = new DataApi(data);

class App extends React.Component {

    state = {
        authors: {},
        articles: {}
    };

    async componentDidMount(){
        const resp = await axios.get('/data');
        const api = new DataApi(resp.data);

        this.setState(() => {
            return {
                articles: api.getArticles(),
                authors: api.getAuthors()
            };
        });
    }

    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId]
    };

    render(){
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    }
    
}

export default App;