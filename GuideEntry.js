import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

class GuideEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            step_num: this.props.steps.length
        };
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }
    
    handleNext() {
        let index = this.state.current,
            length = this.state.step_num;

        if(index < length - 1) {
            index = index + 1
            this.setState({
                current: index
            });
        }
    }

    handlePrev() {
        let index = this.state.current,
            length = this.state.step_num;

        if(index > 0) {
            index = index - 1;
            this.setState({
                current: index
            });
        }
    }

    render() {
        let index = this.state.current,
            step_length = this.state.step_num,
            step_title = this.props.steps[index].title,
            points = this.props.steps[index].points,
            media = this.props.steps[index].media,
            descs = this.props.steps[index].descs;

        return (
            <div class="rendered">
                {/* { index === 0 &&
                    <h1> {this.props.title} </h1>
                } */}
                <div class="guide_header">
                    <h1 id="guide_title"> {this.props.title} </h1>
                    <p> By: <span id="guide_author"> {this.props.author} </span> </p>
                </div>
                <div class = "step_container">
                    <div class="row_step step_title">
                        <h2> {Array.isArray(step_title) ? step_title[0] : step_title} </h2>
                        <span class="step_subtitle">
                            <em> • {Array.isArray(step_title) && step_title[1]} </em>
                        </span>
                    </div>
                    <div class="row_step scrollbox">
                        <section class="column_text">
                            { points.length > 1 &&
                                <div class="step_points">
                                    <ol> 
                                        {points.map((point, index) => {
                                            return Array.isArray(point)
                                                ? <ol> {point.map((subpoint) => (<li> {subpoint} </li>))} </ol> 
                                                : <li class="step_point"> {point} </li>
                                        })}
                                    </ol>
                                </div>
                            }
                            { points.length > 1 && descs[0].length > 2 &&
                                <hr></hr>
                            }
                            { descs[0].length > 2 &&
                                <div class="step_desc">
                                    {descs.map((desc) => (
                                        <p> {desc} </p>
                                    ))}
                                </div>
                            }
                        </section>
                        { media[0].length > 2 &&
                            <section class="column_media">
                                <div class="step_image">
                                    <figure>
                                        <img src= {media[0]} />
                                        <figcaption><em> {media[1]} </em></figcaption>
                                    </figure>
                                </div>
                        </section> }
                    </div>
                </div>
                <div class="button_bar">
                    { index > 0
                        ? (<button class="button_guide" type="button" id="prevBtn" onClick={this.handlePrev}> ← </button>)
                        : (<button class="button_guide" type="button" id="prevBtn" style={{opacity: .15}}> ← </button>)
                    }   
                    { index < step_length - 1
                        ? (<button class="button_guide" type="button" id="nextBtn" onClick={this.handleNext}> → </button>)
                        : (<button class="button_guide" type="button" id="nextBtn" style={{opacity: .15}}> → </button>)
                    }
                    
                </div>
            </div>
        );
    }
}

GuideEntry.defaultProps = {
    title: '',
    description: '',
    developer: '',
    website: '',
    support: '',
    os_support: '',
    pricing: '',
    repo: '',
    ease: '',
    issues: '',
    caution: '',
}

export default GuideEntry;