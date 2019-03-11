import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';


class RecentPosts extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }
    
    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if (index < 3){
                return (
                    <li key={index}>{post.title}</li>
                )
            }
        })
        return posts;
    }

    render() {
        return(
            <div className='recent-post'>
                <div className='recent-post__wrapper'>
                    <div className='recent-post__heading'>Recent Posts</div>
                    <ul className='recent-post__content'>
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { recentPosts } = state.post;
    return {
        recentPosts
    }
}

export default connect(mapStateToProps, actions)(RecentPosts);