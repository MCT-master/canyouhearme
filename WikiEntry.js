import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

class WikiEntry extends React.Component {
    render() {
        return (
            <div class="rendered">
                <div class="avatar avatar--vertical">
                    { this.props.pic_url &&
                        <img class="avatar__photo avatar__photo--xl" src={this.props.pic_url}/>
                    }
                    <div class="avatar__intro">
                        <h1 class="avatar__name">{this.props.title}</h1>
                        <h4 class="avatar_links">
                            <a href={this.props.website}>Official website</a>
                            { this.props.support_url &&
                                <span> • <a href={this.props.support_url}>Support link</a></span>
                            }
                        </h4>
                        <medium class="avatar__subtitle">
                            {this.props.description}
                        </medium>
                    </div>
                    { this.props.mct &&
                        <div class="mct_links">
                            <a href={this.props.mct}>Post from the MCT Blog</a>
                        </div>
                    }
                </div>
                <hr></hr>
                
                <Tabs
                defaultValue="column"
                values={[
                    { label: 'Overview', value: 'column', },
                    { label: 'Specifications', value: 'table', },
                ]}>
                    <TabItem value="column">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <h2 class="column_title">Basic information</h2>
                                    <p><strong>Developer: </strong>{this.props.developer}</p>
                                    <p><strong>Website: </strong><a href={this.props.website}>{this.props.website}</a></p>
                                    <p><strong>Protocol: </strong>{this.props.protocol}</p>
                                    <p><strong>OS Supported: </strong> {this.props.os_support}</p>
                                    <p><strong>Pricing: </strong>{this.props.pricing}</p>
                                    <p><strong>Requires sign-up?: </strong>{this.props.sign_up}</p>
                                </div>
                                <div class="col">
                                    <h2 class="column_title">Detailed information</h2>
                                    <p><strong>Features: </strong>{this.props.features}</p>
                                    <p><strong>Self-hosted?: </strong>{this.props.self_hosting}</p>
                                    <p><strong>Recommended net-speed: </strong>{this.props.rec_speed}</p>
                                    <p><strong>Required net-speed: </strong>{this.props.req_speed}</p>
                                    <p><strong>Max quality: </strong>{this.props.max_qual}</p>
                                    <p><strong>Latency (estimate): </strong>{this.props.latency}</p>
                                    <p><strong>Last update: </strong>{this.props.last_update}</p>
                                    <p><strong>Open source?: </strong>{this.props.open_source}</p>
                                    { this.props.repo &&
                                        <p><strong>Repo: </strong><a href={this.props.repo}>{this.props.repo}</a></p>
                                    }
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
                                    <td><strong>Protocol:</strong></td>
                                    <td>{this.props.protocol}</td>
                                </tr>
                                <tr>
                                    <td><strong>OS Supported:</strong></td>
                                    <td>{this.props.os_support}</td>
                                </tr>
                                <tr>
                                    <td><strong>Features:</strong></td>
                                    <td>{this.props.features}</td>
                                </tr>
                                <tr>
                                    <td><strong>Self-hosted?:</strong></td>
                                    <td>{this.props.self_hosting}</td>
                                </tr>
                                <tr>
                                    <td><strong>Recommended net-speed:</strong></td>
                                    <td>{this.props.rec_speed}</td>
                                </tr>
                                <tr>
                                    <td><strong>Required net-speed:</strong></td>
                                    <td>{this.props.req_speed}</td>
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

                { this.props.issues &&
                    <div class="admonition admonition-note alert alert--secondary">
                        <div class="admonition-heading">
                            <h5>
                                <span class="admonition-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                        <path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z">
                                        </path>
                                    </svg>
                                </span>
                                note
                            </h5>
                        </div>
                        <div class="admonition-content">
                        <p>{this.props.issues}</p>
                        </div>
                    </div>
                }
                
                { this.props.info &&
                    <div class="admonition admonition-tip alert alert--success">
                        <div class="admonition-heading">
                            <h5>
                                <span class="admonition-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                        <path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z">
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
                }

                { this.props.caution &&
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
                }
            </div>
        )
    }
}

WikiEntry.defaultProps = {
    title: '',
    pic_url: '',
    description: '',
    developer: '',
    website: '',
    support_url: '',
    mct: '',
    features: 'Unknown',
    protocol: 'Unknown',
    os_support: '',
    pricing: 'Free',
    sign_up: 'No',
    self_hosting: 'N/A',
    rec_speed: 'Flexible',
    req_speed: 'Unknown',
    max_qual: 'Unknown',
    latency: 'Unknown',
    last_update: 'Unknown',
    open_source: '',
    repo: '',
    ease: ['This service has not been documented by the CYHM community - yet 🤓'],
    issues: '',
    info: '',
    caution: '',
}

export default WikiEntry;
