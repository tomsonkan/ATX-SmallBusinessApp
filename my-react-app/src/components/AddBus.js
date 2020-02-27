import React, {Component, Fragment} from 'react'
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core'

class AddBus extends Component {
  state = {
    open:false,
    Name:'',
    Description:'',
    Hours:'',
    Address:''
  }

  toggleDialog = () => this.setState({ open: !this.state.open })

  handleTextChange = (e) => {
    const newState = {...this.state}
    newState[e.target.id] = e.target.value
    this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const payload = {...this.state}
    payload.id = this.props.busTotal + 1
    delete payload.open
    this.props.addBus(payload)
    this.setState({open: false})
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.open !== this.state.open) {
      this.setState({
        Name:'',
        Description:'',
        Hours:'',
        Address:''
      })
    }
  }
  render() {
    return (
        <Fragment>
            <div style={{ textAlign: 'center' }}>
                <h1>Add Business:</h1>
                <Button
                    variant="contained"
                    className="add-bus"
                    onClick={this.toggleDialog}
                >
                    Add Business
                </Button>
            </div>
            <div>
                <Dialog open={this.state.open} onClose={this.toggleDialog} >
                    <DialogTitle>Add New Business</DialogTitle>
                    <DialogContent>
                        <form 
                            onSubmit={this.handleSubmit}
                            style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                            <TextField 
                                id="Name" 
                                placeholder="Name" 
                                value={this.state.name} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Description" 
                                placeholder="Description" 
                                value={this.state.description} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Hours" 
                                placeholder="From -- to -- " 
                                value={this.state.hours} 
                                onChange={this.handleTextChange} 
                                required />
                            <TextField 
                                id="Address" 
                                placeholder="ex. 123 Smith st." 
                                value={this.state.address} 
                                onChange={this.handleTextChange} 
                                required />
                            <br />
                            <Button variant="contained" color="primary" type="submit">Submit</Button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </Fragment>
    )
}


}

export default AddBus