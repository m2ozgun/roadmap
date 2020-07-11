import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
class Link extends React.Component {
    
    render() {
        return (
            <div>
                <div className="f4 ba br3 black-60 mv3 pv2 ph2 flex">
                    <div class="flex items-center justify-center">
                        <a href="#0" class="f5 no-underline black bg-animate hover-bg-green hover-white br3 flex flex-column items-center pa3 ba border-box mr2">
                        <FontAwesomeIcon icon={faStar} />
                        <span class="pl1 pt2">21</span>
                        </a>
                    </div>
                    <div>
                        <h2 className="lh-copy f5 mb1 mt1">{this.props.card.title} </h2>
                        <p className="lh-copy f6 mb1 mt1">{this.props.card.description}</p>
                        <p className="lh-copy f6 i mb1 mt1">{this.props.card.createdAt}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export { Link as default }