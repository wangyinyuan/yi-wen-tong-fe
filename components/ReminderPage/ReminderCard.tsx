import { lightTheme } from "@/constants/Color";
import { ReminderCardProps } from "@/types/Reminder";
import { StyleSheet, Text, View } from "react-native";

function showDate(dateString: string | undefined) {
  if (dateString === undefined) return "";
  const date = new Date(dateString);
  return `${date.getUTCFullYear().toString().slice(2, 4)}/${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getUTCDate().toString().padStart(2, "0")}`;
}

const cardColorGroups = [
  {
    bg: lightTheme.bgPink3,
    polyfill: lightTheme.bgPink1,
  },
  {
    bg: lightTheme.bgPurple4,
    polyfill: lightTheme.bgPurple5,
  },
  {
    bg: lightTheme.bgYellow2,
    polyfill: lightTheme.bgYellow3,
  },
  {
    bg: lightTheme.bgGreen2,
    polyfill: lightTheme.bgGreen3,
  },
  {
    bg: lightTheme.bgYellow4,
    polyfill: lightTheme.bgYellow5,
  },
];

export default function ReminderCard({
  title,
  detail,
  dueDate,
  dueTime,
  index = 0,
}: ReminderCardProps) {
  const { bg, polyfill } = cardColorGroups[index % cardColorGroups.length];

  return (
    <View style={[styles.cardContainer, { backgroundColor: bg }]}>
      <View style={[styles.leftPolyfill, { backgroundColor: polyfill }]}></View>
      <View style={styles.textLayout}>
        <Text style={[styles.textBase, styles.title]}>{title}</Text>
        <Text style={[styles.textBase, styles.detail]}>
          {detail && detail?.length > 67
            ? `${detail?.substring(0, 67)}...`
            : detail}
        </Text>
        <Text style={[styles.textBase, styles.timeText]}>{`${showDate(
          dueDate?.toString()
        )} at ${dueTime}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: lightTheme.bgPurple1,
    height: 150,
    width: "85%",
    borderRadius: 35,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10,
    position: "relative",
    flexDirection: "row",
  },
  leftPolyfill: {
    backgroundColor: lightTheme.bgPurple3,
    height: "100%",
    width: 30,
    borderTopLeftRadius: 35,
    borderBottomLeftRadius: 35,
  },
  textLayout: {
    flex: 1,
    padding: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  textBase: {
    letterSpacing: 1.2,
    color: lightTheme.tBlue2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeText: {
    color: lightTheme.tGray3,
  },
  detail: {
    marginTop: 10,
    marginBottom: 5,
    height: 75,
  },
});
