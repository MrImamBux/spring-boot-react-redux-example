import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        return <footer className="footer">
            <div className="container-fluid">
                <p className="copyright text-center">
                    Project Architecture Designed By: Imam Bux, Matrikel-Nr. 347704
                </p>
            </div>
        </footer>
    }
}
