import { lightTheme } from "@/constants/Color";
import { Image } from "expo-image";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function ReportPage() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        source="https://cdn.jsdelivr.net/gh/wangyinyuan/Picgo/illustration.png"
        style={[styles.decorationImg, { width: width - 50 }]}
        contentFit="contain"></Image>
      <Text></Text>
      <View style={[styles.mainLayout]}>
      <ScrollView>
        <Text style={{fontSize: 16}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          consectetur reiciendis placeat blanditiis vitae a labore provident
          aperiam, laudantium ducimus consequuntur consequatur, repellat
          eligendi repellendus adipisci. Modi deserunt accusantium a. Doloremque
          ab, veritatis quo est, consequuntur doloribus, consectetur cum
          aspernatur sapiente architecto odio animi. Aspernatur quis a qui
          exercitationem voluptas modi atque placeat nam nemo id! Ipsum unde
          eius minus? A voluptatibus numquam, quam voluptatem doloribus dicta,
          consequatur repellendus eligendi iusto voluptas dolor id sint natus
          eius rerum ea ab. Tenetur, accusamus. Magni minus similique, eum
          consectetur praesentium voluptatem maxime. Corrupti id iusto dolore
          nesciunt. Cupiditate provident odit sunt quos assumenda reiciendis
          alias tenetur dolore sit officia neque, nobis deleniti maxime odio
          voluptatibus. Saepe sunt nulla nostrum voluptatibus, dolorum quod!
          Error, corporis debitis, aut nulla saepe enim corrupti reiciendis sunt
          voluptatum nisi aperiam tenetur dicta eum quaerat eaque. Eos sit
          inventore numquam eaque explicabo tenetur facilis? Quasi quibusdam
          error unde.
        </Text>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.bgPink2,
    alignItems: "center",
  },
  decorationImg: {
    position: "absolute",
    height: 220,
    zIndex: 10,
  },
  mainLayout: {
    marginTop: 160,
    flex: 1,
    width: "95%",
    backgroundColor: lightTheme.pageBackground,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 0,
  },
});
