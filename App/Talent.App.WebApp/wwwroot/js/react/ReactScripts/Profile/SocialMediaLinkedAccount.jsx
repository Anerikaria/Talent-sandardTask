/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup, Icon } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component{
    constructor(props) {
        super(props)

        const linkedAccounts = props.linkedAccounts ?
            Object.assign({}, props.linkedAccounts)
            : {
                linkedIn: "",
                github: ""
            }
        this.state = {
            showEditSection: false,
            socialMedia: linkedAccounts
        }

        this.renderDisplay = this.renderDisplay.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.saveAcc = this.saveAcc.bind(this)
    }

    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.socialMedia)
        data[event.target.name] = event.target.value
        this.setState({
            socialMedia: data
        })
    }

    openEdit() {
        const linkedAccounts = Object.assign({}, this.props.linkedAccounts)
            this.setState({
                showEditSection: true,
                socialMedia: linkedAccounts
            })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    saveAcc() {
        console.log(this.props.componentId)
        console.log(this.state.socialMedia)
        const data = Object.assign({}, this.state.socialMedia)
        this.props.controlFunc(data)
        this.closeEdit()
    }

    render() {
        
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()

        )

        
    }

    renderEdit() {
        return (
            <div className='ui sixteen wide column'>
                <ChildSingleInput
                    inputType="text"
                    label="LinkedIn"
                    name="linkedIn"
                    value={this.state.socialMedia.linkedIn}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your LinkedIn URL"
                    errorMessage="Please enter a valid URL "

                />
                <ChildSingleInput
                    inputType="text"
                    label="GitHub"
                    name="github"
                    value={this.state.socialMedia.github}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your GitHub URL"
                    errorMessage="Please enter a valid URL"
                />


               
                
                <button type="button" className="ui teal button" onClick={this.saveAcc}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
            )
    }

    renderDisplay() {
        let linkedIn = this.props.linkedAccounts ? this.props.linkedAccounts.linkedIn : ""
        let gitHub = this.props.linkedAccounts ? this.props.linkedAccounts.gitHub : ""

        return (
            <div className='row'>
                <div className="sixteen wide column">


                    <a href={linkedIn}>
                      <button type="button" style={{ width: "20%" }} className="ui left floated small  linkedin button"   >
                        <span><i className="linkedin icon" /> {"LinkedIn"}    </span>
                    </button>
                        </a>


                    <a href={gitHub}>
                    <button type="button" style={{ width: "20%", backgroundColor: "black", color: "white" }}  className="ui left floated small github button">
                        <span>  <i className="github icon" /> {"GitHub"}  </span>
                    </button>
                  </a>

                    <button type="button" className="ui right floated teal button" onClick={this.openEdit} >
                        Edit
                    </button>

                </div>

            </div>
            )
    }

        }
    




