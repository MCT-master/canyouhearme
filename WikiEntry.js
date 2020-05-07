import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

class WikiEntry extends React.Component {
    render() {
        return (
            <div>
                <div class="avatar avatar--vertical">
                    <img
                        class="avatar__photo avatar__photo--xl"
                        src={this.props.pic_url}
                    />
                    <div class="avatar__intro">
                        <h1 class="avatar__name">{this.props.title}</h1>
                        <medium class="avatar__subtitle">
                            {this.props.description}
                        </medium>
                    </div>
                </div>
                
                <hr></hr>

                <Tabs
                defaultValue="column"
                values={[
                    { label: 'Column', value: 'column', },
                    { label: 'Table', value: 'table', },
                ]}>
                    <TabItem value="column">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h2>Basic information</h2>
                                    <br></br>
                                    <p><strong>Developer: </strong>{this.props.developer}</p>
                                    <p><strong>Website: </strong><a href={this.props.website}>{this.props.website}</a></p>
                                    <p><strong>Protocol: </strong>{this.props.protocol}</p>
                                    <p><strong>OS Supported: </strong> {this.props.os_support}</p>
                                    <p><strong>Pricing: </strong>{this.props.pricing}</p>
                                </div>
                                <div class="col">
                                    <h2>Detailed information</h2>
                                    <br></br>
                                    <p><strong>Requires sign-up?: </strong>{this.props.sign_up}</p>
                                    <p><strong>Self-hosted?: </strong>{this.props.hosting}</p>
                                    <p><strong>Recommended net-speed: </strong>{this.props.rec_speed}</p>
                                    <p><strong>Max quality: </strong>{this.props.max_qual}</p>
                                    <p><strong>Latency (estimate): </strong>{this.props.latency}</p>
                                    <p><strong>Last update: </strong>{this.props.last_update}</p>
                                </div>
                            </div>
                        </div>
                    </TabItem>

                    <TabItem value="table">
                        <div class="spec-table">
                            <h2>Overview of technical specifications</h2>
                            <table>
                                <tr>
                                    <th>Detail</th>
                                    <th>Value</th>
                                </tr>
                                <tr>
                                    <td><strong>Developer:</strong></td>
                                    <td>{this.props.developer}</td>
                                </tr>
                                <tr>
                                    <td><strong>Website:</strong></td>
                                    <td><a href={this.props.website}>{this.props.website}</a></td>
                                </tr>
                                <tr>
                                    <td><strong>Protocol:</strong></td>
                                    <td>{this.props.protocol}</td>
                                </tr>
                                <tr>
                                    <td><strong>OS Supported:</strong></td>
                                    <td>{this.props.os_support}</td>
                                </tr>
                                <tr>
                                    <td><strong>Pricing:</strong></td>
                                    <td>{this.props.pricing}</td>
                                </tr>
                                <tr>
                                    <td><strong>Requires sign-up?:</strong></td>
                                    <td>{this.props.sign_up}</td>
                                </tr>
                                <tr>
                                    <td><strong>Self-hosted?:</strong></td>
                                    <td>{this.props.hosting}</td>
                                </tr>
                                <tr>
                                    <td><strong>Recommended net-speed:</strong></td>
                                    <td>{this.props.rec_speed}</td>
                                </tr>
                                <tr>
                                    <td><strong>Max quality:</strong></td>
                                    <td>{this.props.max_qual}</td>
                                </tr>
                                <tr>
                                    <td><strong>Latency (estimate):</strong></td>
                                    <td>{this.props.latency}</td>
                                </tr>
                                <tr>
                                    <td><strong>Last update:</strong></td>
                                    <td>{this.props.last_update}</td>
                                </tr>
                            </table>
                        </div>
                    </TabItem>
                </Tabs>

                <hr></hr>

                <div class="card-demo">
                    <div class="card">
                        <div class="card__header">
                            <h3>Ease of use</h3>
                        </div>
                        <div class="card__body">
                            <p>{this.props.ease}</p>
                        </div>
                    </div>
                </div>

                <br></br>

                <div class="card-demo">
                    <div class="card">
                        <div class="card__header">
                            <h3>Issues</h3>
                        </div>
                        <div class="card__body">
                            <p>{this.props.issues}</p>
                        </div>
                    </div>
                </div>

                <br></br>

                <div class="admonition admonition-info alert alert--info">
                    <div class="admonition-heading">
                        <h5>
                            <span class="admonition-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                    <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z">
                                    </path>
                                </svg>
                            </span>
                            info
                        </h5>
                    </div>
                    <div class="admonition-content">
                    <p>{this.props.info}</p>
                    </div>
                </div>

                
                <div class="admonition admonition-caution alert alert--warning">
                    <div class="admonition-heading">
                        <h5>
                            <span class="admonition-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path>
                                </svg>
                            </span>
                            caution
                        </h5>
                    </div>
                    <div class="admonition-content">
                        <p>{this.props.caution}</p>
                    </div>
                </div>

            </div>
        )
    }
}
WikiEntry.defaultProps = {
    title: '',
    description: '',
    developer: '',
    website: '',
    protocol: '',
    os_support: '',
    pricing: '',
    sign_up: '',
    hosting: '',
    rec_speed: '',
    req_speed: '',
    max_qual: '',
    latency: '',
    last_update: '',
    open_source: '',
    repo: '',
    ease: '',
    issues: '',
    caution: '',
}

export default WikiEntry;