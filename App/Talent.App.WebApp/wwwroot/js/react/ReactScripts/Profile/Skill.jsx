/* Skill section */
import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Table, Button } from 'semantic-ui-react'

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        const skillData = props.skillData ?
            Object.assign({}, props.skillData)
            : {
                skill: "",
                skillLevel: ""
            }
        this.state = {
            showEditSection: false,
            newSkill: skillData

        }

        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        //this.handleInputChange = this.handleInputChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
    }


    openEdit() {
        const skillData = Object.assign({}, this.props.skillData)
        this.setState({
            showEditSection: true,
            newSkill: skillData
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {

        const data = Object.assign({}, this.state.newSkill)
        data[event.target.name] = event.target.value
        this.setState({
            newSkill: data
        })
    }


    saveContact() {
        console.log(this.props.componentId)
        console.log(this.state.newSkill)
        const data = Object.assign({}, this.state.newSkill)
        this.props.controlFunc(this.props.componentId, data)
        this.closeEdit()
    }


    render() {

        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {

        const skillOptions = [
            {
                key: "b",
                value: "Beginner",
                text: "Beginner"
            },
            {
                key: "I",
                value: "Intermediate",
                text: "Intermediate"

            },
            {
                key: "e",
                value: "Expert",
                text: "Expert"
            }
        ];


        const options = skillOptions.map(opt => {
            return <option key={opt.key} value={opt.value}> {opt.text}</option >
        })

        return (
            <div className="row">
                <div className="ui sixteen wide column">
                    <div className="ui grid" style={{ marginBottom: "5px" }}>

                        <span className="four wide column">
                            <ChildSingleInput
                                inputType="text"
                                name="skill"
                                value={this.state.newSkill.skill}
                                controlFunc={this.handleChange}
                                maxLength={80}
                                placeholder="Add Skill"
                                errorMessage="Please enter skill"
                            />
                        </span>

                        <span className="four wide column">
                            <select className="ui right labeled dropdown"
                                onChange={this.handleChange}
                                value={this.state.newSkill.skillLevel}
                            >
                                <option value="">Skill Level</option>
                                {options}
                            </select>
                        </span>

                        <div className="six wide column" style={{ textAlign: "center" }}>
                            <button type="button" className="ui teal button" onClick={this.saveContact}>Add</button>
                            <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
                        </div>

                    </div>

                    <div className="ui sixteen wide column" style={{ margin: "0px", padding: "0px" }}>
                        {this.renderDisplay()}
                    </div>
                </div>
            </div>

        )
    }

    renderDisplay() {

        return (
            <div className='row'>
                <div className="sixteen wide column">
                    <Table className="singleLine" style={{ margin: "0px", padding: "0px" }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Skill</Table.HeaderCell>
                                <Table.HeaderCell>Level</Table.HeaderCell>
                                <Table.HeaderCell>
                                    <button type="button" className="ui teal right floated button" onClick={this.openEdit}>+ Add New</button>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    </Table>
                </div>
            </div>

        )

    }
}

