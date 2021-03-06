import React, { Component } from "react";
import {Button,Label, Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Modal, ModalHeader, ModalBody, } from "reactstrap";
import { Link } from 'react-router-dom';
import { LocalForm,Control,Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;


    class CommentForm extends Component {
        constructor(props){
            super(props);
            this.state ={
                isNanOpen: false,
                isModalOpen: false,
            };
            //this.handleSubmit= this.handleSubmit.bind(this);
        }
        toggleModal = () => {
            this.setState({
                isModalOpen: !this.state.isModalOpen,
                
            });
        };

        handleSubmit= value => {
            this.toggleModal();
                console.log(`Rating: ${JSON.stringify(+value.rating)}, Your Name: ${JSON.stringify(value.author)},
                Comments: ${JSON.stringify(value.text)}`);

            alert(`Rating: ${JSON.stringify(+value.rating)}, Your Name: ${JSON.stringify(
                value.author)},Comments: ${JSON.stringify(value.text)}`);
        }

        render(){
            return (
                <>
                <Button online onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg" aria-hidden="true" />
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={value => this.handleSubmit(value)}>
                    <div className="form-group">
                        <Label>Rating</Label>
                        <Control.select name="rating" model=".rating" id="rating" className="form-control">
                            <option selected>Select option</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </div>
                    <div className="form-group">
                        <Label>Your Name</Label>
                        <Control.text
                            name="author"
                            model=".author"
                            id="author"
                            className="form-control"
                            validators={{
                                required,
                                minLength: minLength(2),
                                maxLength: maxLength(15),
                            }}
                            />
                        <Errors 
                            className="text-danger" model=".author" show="touched"
                            component="div" messages=
                            {{
                            required: 'required',
                            minLength: 'Must be at lease 10 number',
                            maxLength: 'Must be 15 numbers or less',
                            isNum: 'Must be a number',
                            }}
                            />
                        </div>
                        <div className="form-group">
                            <Label>Comment</Label>
                            <Control.textarea
                            name="text"
                            model=".text"
                            row="6"
                            id="text"
                            className="form-control"
                            />
                        </div>
                    </LocalForm>
                        <Button type="submit" value="submit" color="primary">
                            Submit
                        </Button>
                    </ModalBody>
                    </Modal>
                </>
            );
        }
    }
    function RenderCampsite({campsite}) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description} </CardText>
                </CardBody>
                </Card>
            </div>
        );
    }
        function RenderComments({comments}) {
            if (comments) {
            return (
                <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return (
                    <div key={comment.id}>
                        <p>{comment.text} {comment.author} 
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </div>
                    );
                })}
                <CommentForm />
                </div>
            );
            }
            return <div />;
        }
        function CampsiteInfo(props) {
            if (props.campsite) {
                return (
                    <div className="container" >
                        <div className="row">
                            <div v className="col">
                                    <Breadcrumb>
                                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                        <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                                    </Breadcrumb>
                                    <h2>{props.campsite.name}</h2>
                                <hr />
                            </div>
                    </div>
                        <div className="row">
                            <RenderCampsite campsite ={props.campsite} />
                            <RenderComments comments ={props.comments} />
                        </div>
                    </div>
                );
                }
            return <div></div>;
        }
    
    

export default CampsiteInfo;


