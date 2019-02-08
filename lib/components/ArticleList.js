import React from 'react';

import Article from './Article';

// const ArticleList = (props) => {
//     return (
//         <div>
//             {
//                 Object.values(props.articles).map((article) => {
//                     return <Article
//                         key={article.id}
//                         article={article}
//                     />;
//                 })
//             }
//         </div>
//     );
// };
class ArticleList extends React.PureComponent {
    render() {
        return (
            <div>
                {
                    Object.values(this.props.articles).map((article) => {
                        return <Article
                            key={article.id}
                            article={article}
                    />;
                })
                }
            </div>
        );
    }
}

export default ArticleList;