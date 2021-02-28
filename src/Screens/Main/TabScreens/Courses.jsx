import React from 'react'
import { ScrollView , StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper';
import { AntDesign } from "../../../Contants";
import colors from "../../Theme/Colors";

const Courses = () => {

   const data = [
      {
         courseName: "Maths",
         courseTeacher: "Sir. Shohab Siddique",
      },
      {
         courseName: "Physics",
         courseTeacher: "Sir. Kamran Siddique",
      },
      {
         courseName: "Introduction to Computer Science",
         courseTeacher: "Sir. Rehan Siddique",
      },
      {
         courseName: "Introduction to Software Engineering",
         courseTeacher: "Sir. Shahab Siddique",
      },
      {
         courseName: "Computer Logic and Design",
         courseTeacher: "Miss Maleeha Anwar",
      },
   ]

   return (
      <ScrollView>
         <List.Section>
            {data.map(
               (item, i) => (
                  <List.Item 
                     key={i}
                     title={item.courseName}
                     description={item.courseTeacher}
                     left={() => (<AntDesign style={{alignSelf: "center"}} name="book" size={24} color={colors.primary} />)} 
                  />
               )
            )}
         </List.Section>
      </ScrollView>
   )
}

export default Courses

const styles = StyleSheet.create({})
