import React from 'react'
import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Item } from "native-base";
import colors from "../../Theme/Colors";

const {height, width} = Dimensions.get("window");

const Sudents = () => {

   const data = [
      {
         name: "Usama Irfan",
         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus veritatis iure, molestias architecto placeat, dolores, nobis culpa excepturi quas quam quia commodi temporibus amet tempora et vero optio facilis praesentium?",
         email: "someone@nowhere.com"
      },
      {
         name: "Imran Tahir",
         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, vitae.",
         email: "iam@lost.com",
      },
      {
         name: "The Unknown",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, iusto voluptatem nobis labore modi velit odit quibusdam hic enim in, esse ipsam similique. Voluptate similique veniam, ipsam commodi fugiat aperiam quo iste ad blanditiis quod?",
         email: "dontContact@pleaseDont.com",
      }
   ]

   return (
      <Container>
        <Content>
          <List>
             {data.map((item, i) => (
               <ListItem key={i} avatar>
                  <Left>
                     <Thumbnail source={{ uri: 'https://picsum.photos/50?random=1' }} />
                  </Left>
                  <Body>
                     <Text>{item.name}</Text>
                     <Text style={styles.subText}>{item.description}</Text>
                     <Text style={{...styles.subText, color: colors.accent}}>{item.email}</Text>
                  </Body>
                  <Right>
                     <Text style={styles.subText}>IBM</Text>
                  </Right>
               </ListItem>
             ))}
          </List>
        </Content>
      </Container>
   )
}

export default Sudents

const styles = StyleSheet.create({
   subText: {
      fontSize: width * 0.035,
      color: colors.lightGray,
      maxWidth: width * 0.75,
   },
})
