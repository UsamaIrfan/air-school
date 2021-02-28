import React from 'react'
import { StyleSheet, ScrollView, View, Image} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Companies = () => {

   const data = [{
      companyName: "IBM",
      tagLine: "Technology and Innovation",
      image: "https://picsum.photos/700?random=1"
   },
   {
      companyName: "Cubix",
      tagLine: "Technology is a Need not a skill",
      image: "https://picsum.photos/700?random=2"
   },
   {
      companyName: "10Pearls",
      tagLine: "All in one IT solutions",
      image: "https://picsum.photos/700?random=3"
   },
   {
      companyName: "Venture Drive",
      tagLine: "Tech is Imagination",
      image: "https://picsum.photos/700?random=4"
   },
] 

   return (
      <ScrollView>
         {data.map((item, i) => (
            <Card key={i}>
               <Card.Title title={item.companyName} subtitle={item.tagLine} />
               <Card.Cover source={{ uri: item.image }} />
               {/* <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
               </Card.Actions> */}
            </Card>
         ))}
      </ScrollView>
   );
}

export default Companies

const styles = StyleSheet.create({})
