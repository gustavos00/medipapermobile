import React from "react";
import { View, Text, ScrollView } from "react-native";
import { AppointmentAlert } from "../../components/AppointmentAlert";
import { styles } from "./styles";

export function Home() {
  return (
    <View>
      <Text style={styles.title}>Marcações</Text>
      <View>
        <ScrollView style={{ marginBottom: 230 }}>
          <AppointmentAlert
            highlightedLabel={"Rua da Sé"}
            unlightedLabel={"Dia 15 de Outubro, ás 10h"}
            isHighlighted={true}
          />
          <AppointmentAlert
            highlightedLabel={"Rua da Sé"}
            unlightedLabel={"Dia 15 de Outubro, ás 10h"}
            isHighlighted={false}
          />
          <AppointmentAlert
            highlightedLabel={"Rua da Sé"}
            unlightedLabel={"Dia 15 de Outubro, ás 10h"}
            isHighlighted={false}
          />
          <AppointmentAlert
            highlightedLabel={"Rua da Sé"}
            unlightedLabel={"Dia 15 de Outubro, ás 10h"}
            isHighlighted={false}
          />
          <AppointmentAlert
            highlightedLabel={"Rua da Sé"}
            unlightedLabel={"Dia 15 de Outubro, ás 10h"}
            isHighlighted={false}
          />
          <AppointmentAlert
            highlightedLabel={"Rua da Sé"}
            unlightedLabel={"Dia 15 de Outubro, ás 10h"}
            isHighlighted={false}
          />
          <AppointmentAlert
            highlightedLabel={"Rua da Sé"}
            unlightedLabel={"Dia 15 de Outubro, ás 10h"}
            isHighlighted={false}
          />
        </ScrollView>
      </View>
    </View>
  );
}
