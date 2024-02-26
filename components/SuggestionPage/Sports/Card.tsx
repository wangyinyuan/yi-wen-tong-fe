import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function MyCard({
  title,
  content,
  bgColor = "#fff",
}: {
  title: string;
  content: string;
  bgColor?: string;
}) {
  return (
    <Card style={[styles.container, { backgroundColor: bgColor }]}>
      <Card.Title title={title} />
      <Card.Content>
        <Text style={[styles.bodyText]}>{content}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
  }
});
