import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

const courses = [
  {
    id: "1",
    title: "Sewing Fundamentals",
    level: "Beginner",
    lessons: 12
  },
  {
    id: "2",
    title: "Pattern Drafting",
    level: "Beginner → Intermediate",
    lessons: 18
  },
  {
    id: "3",
    title: "Garment Construction",
    level: "Intermediate",
    lessons: 20
  },
  {
    id: "4",
    title: "Fashion Design Mastery",
    level: "Advanced",
    lessons: 24
  }
];

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.logo}>SEWLAB 🧵</Text>

        <Text style={styles.heading}>
          Learn. Create. Master Sewing.
        </Text>

        <Text style={styles.subtitle}>
          A global learning app for people who want to learn sewing
          and fashion design.
        </Text>

        <TouchableOpacity
          style={styles.aiButton}
          onPress={() => navigation.navigate("AI")}
        >
          <Text style={styles.aiText}>
            🤖 Ask the AI Sewing Assistant
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>
          Continue Learning
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Sewing Fundamentals
          </Text>

          <Text style={styles.muted}>
            Lesson 1 • Getting Started
          </Text>

          <Text style={styles.progress}>
            0% complete
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Featured Courses
        </Text>

        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.card}
            onPress={() =>
              navigation.navigate("Course", { course })
            }
          >
            <Text style={styles.cardTitle}>
              {course.title}
            </Text>

            <Text style={styles.muted}>
              {course.level} • {course.lessons} lessons
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Premium")}
        >
          <Text style={styles.linkText}>
            💎 Explore SEWLAB Premium
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Course({ route }) {
  const course = route.params.course;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>
          {course.title}
        </Text
