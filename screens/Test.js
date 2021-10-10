// import React, {useEffect, useState} from 'react'
// import { View, Text } from 'react-native'

// const Test = () => {

//   const email_addr = "/////email1@email.com/email2@email.com//email3@email.com/////email4@email.com/email5@email.com"
//   const [email1, setEmail1] = useState("");
//   const [email2, setEmail2] = useState("");
//   const [email3, setEmail3] = useState("");
//   const [email4, setEmail4] = useState("");
//   const [email5, setEmail5] = useState("");

//   const emailArray = email_addr.split("/");

//   const fixArr = () =>{
//     var len = emailArray.length, i;
//     for(i = 0; i < len; i++ ){
//       emailArray[i] && emailArray.push(emailArray[i]);
//     }
//     emailArray.splice(0, len);

//     console.log(emailArray)
//   }

//   useEffect(() => {
//     fixArr();
//   })

//   return (
//     <View>
//       <Text>Test Screen</Text>
//     </View>
//     )
// }

// export default Test



import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase'

export class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      order_menu : "",
      order_price : "",
      order_quantity : "",
    }
  }

  fetchData(){
    firebase.default.database()
    .ref('orders/')
    .on('value', snapshot => {
      const data = snapshot.val();
      this.setState({
        order_menu : data.order_menu,
        order_price : data.order_price,
        order_quantity : data.order_quantity
      })
    })
    console.log(this.order_menu);
  }


  displayQuantity(){
    quantity.map(data => {
      return(<td>{data}</td>)
    })
  }
  

  componentDidMount(){
    this.fetchData();
  }

  render() {
    return (
      <View>
        <Text> Test Screen </Text>
      </View>
    )
  }
}

export default Test


// fetchMenuElement(){
//   menu.forEach(data => {
//     return (<td>{data}</td>)
//   });
//   quantity.forEach(data => {
//     return (<td>{data}</td>)
//   });
//   price.forEach(data => {
//     return (<td>{data}</td>)
//   });
// }

// displayMenus(){
//   menu.map(data => {
//     return(<td>{data}</td>)
//   })
// }