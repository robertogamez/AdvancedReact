import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
    article: {
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold'
    },
    date: {
        fontSize: '0.85m',
        color: '#888'
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10        
    },
    body: {
        paddingLeft: 20
    }
};

// const Article = (props) => {

//     const { article, author } = props;
    
//     return (
//         <div style={styles.article}>
//             <div style={styles.title}>{article.title}</div>
//             <div style={styles.date}>{article.date}</div>
//             <div style={styles.author}>
//                 <a href={author.website} style={styles.website}>
//                     {author.firstName} {author.lastName}
//                 </a>
//             </div>
//             <div style={styles.body}>{article.body}</div>
//         </div>
//     );
// };

class Article extends React.PureComponent {
    render() {
        const { article, author } = this.props;
    
        return (
            <div style={styles.article}>
                <div style={styles.title}>{article.title}</div>
                <div style={styles.date}>{article.date}</div>
                <div style={styles.author}>
                    <a href={author.website} style={styles.website}>
                        {author.firstName} {author.lastName}
                    </a>
                </div>
                <div style={styles.body}>{article.body}</div>
            </div>
        );
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

function extraProps(store, originalProps) {
    return {
        author: store.lookupAuthor(originalProps.article.authorId)
    };
}

const ArticleContainer = storeProvider(extraProps)(Article);

export default ArticleContainer;