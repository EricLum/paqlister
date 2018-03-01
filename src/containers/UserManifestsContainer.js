//Container for showing all of the collections a user has or packs.
import React from 'react'
import UserManifestsNavbar from './UserManifestsNavbar'
import ItemWrapper from '../components/ItemWrapper'
import '../styles/UserManifestsContainer.css'
import {Button, Icon, Modal} from 'react-materialize'
import { connect } from 'react-redux'
import { loadManifestItems, loadManifestItemPositions, addManifestItem} from '../actions/actions'

class UserManifestsContainer extends React.Component {

  state = {
    formData: {
      name: '',
      description: '',
      price: '',
      brand: '',
      image: ''
    },
    partyMode: false
  }

  componentDidMount(){
    //load all the initial items from state and their positions.
    this.props.loadManifestItems('http://localhost:3001/api/v1/manifests/getItems', this.props.match.params.manifestId)
    this.props.loadManifestItemPositions('http://localhost:3001/api/v1/manifestitems/getManifestItemsPositions', this.props.match.params.manifestId)
  }

  handleAddItem = (e) => {
    // have to add item to db
    e.preventDefault()
    this.props.addManifestItem('http://localhost:3001/api/v1/items',this.state.formData,
    this.props.match.params.manifestId)
    //have to connect manifest to item.

    //blank out state on submit.
    this.setState({
      formData: {
        name: '',
        description: '',
        price: '',
        brand: '',
        image: ''
      },
      partyMode: false
    })
  }

  handleEngageDangerMode = (e) => {

    this.setState((prevState)=> {
      return { ...prevState,
        partyMode: true
      }
    },this.forceUpdate())

  }

  handleOnChange = (e) => {

    this.setState({
      formData: {
        [e.target.name]: e.target.value
      }
    })
  }

  render(){

    if (this.props.isLoading){
      return (
        <div style={{height: '750px', width: '1100px', padding: '10px'}}>
          <img src='https://thumb1.shutterstock.com/display_pic_with_logo/165585330/614711306/stock-vector-vector-d-table-for-object-presentation-empty-white-top-table-isolated-on-transparent-background-614711306.jpg' className='box'></img>
        </div>
      )
    }

let items ;
    if (this.props.items) {
      items= this.props.items.map( (item) => {
        let manifestItemPosition = this.props.manifestItems.filter( (manifestItem) => manifestItem.item_id == item.id )
        return (<ItemWrapper partyMode={this.state.partyMode} key={item.id} item={item} manifestId={this.props.match.params.manifestId} positions={manifestItemPosition}/>)
    })

    }

    return (
      <div>
        <div className="parentContainer">
          <UserManifestsNavbar />
          <div>
             <div style={{height: '1080px', width: '1900px', padding: '10px'}}>
               {items}
             </div>
           </div>
           <div className='buttonsContainer'>
             <div className='buttonsRow'>
               <Button className='controlButton resetButton'>Reset</Button>
               <Modal
                 header='Add an item'
                 trigger={<Button className ='controlButton saveButton' waves='light'>Add Item</Button>}>
                  <form onSubmit={this.handleAddItem}>
                    <input type='text' onChange={this.handleOnChange}
                      name='name' placeholder='name'/>
                    <input type='text' onChange={this.handleOnChange} name='description' placeholder='description'/>
                    <input type='text' onChange={this.handleOnChange} name='price' placeholder='price'/>
                    <input type='text' onChange={this.handleOnChange} name= 'brand' placeholder='brand'/>
                    <input type='text' onChange={this.handleOnChange} name='image' placeholder='image URL'/>
                    <input type='submit' />
                  </form>
               </Modal>
               <Modal
                 header="Warning"
                 trigger={<Button className ='red accent-4 controlButton shareButton' waves='light'>Activate Danger Mode</Button>}>
                 <div className='dangerModal'>
                   <p>
                     By engaging danger mode you may break the New York City Local Law 113 of 2005. Please be well equipped, stay hydrated, and with all due respect of the law, please ask yourself whether the following is really necessary. If you are willing to proceed you may be subject to the following side effects of danger mode:
                   </p>
                     <ul>
                       <li>Moderately increased heartrate</li>
                       <li>Increased feelings of general happiness and pleasure</li>
                       <li>Extremely high chance of movement of the orbicularis oculi  muscle and contraction of the zygomatic major muscle.</li>
                       <li>Highly decreased inhibitions</li>
                       <li>Broken Ear-Drum syndrome</li>
                       <li>Bananas in Pajamas</li>
                       <li>Highly increased risk of embarassing photos</li>
                     </ul>
                 </div>

                  <Button className='red accent-4' onClick={this.handleEngageDangerMode}><Icon left >party_mode</Icon>Engage Danger Mode</Button>
               </Modal>
             </div>
          </div>
          </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {items: state.manifestsReducer.items,
          manifestItems: state.manifestsReducer.manifestItems,
          isLoading: state.manifestsReducer.isLoading
  }
}

export default connect(mapStateToProps ,{loadManifestItems, loadManifestItemPositions, addManifestItem})(UserManifestsContainer)
