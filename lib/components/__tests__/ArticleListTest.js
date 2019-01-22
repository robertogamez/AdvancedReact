import React from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';

// import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({
    adapter: new Adapter()
});

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' }
        }
    };

    Article.propTypes = {};

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList 
                {...testProps}
            />
        );
        
        // console.log(wrapper.find(Article).length.toHaveLength(2));

        expect(wrapper.find(Article)).toHaveLength(2);
    });
});

