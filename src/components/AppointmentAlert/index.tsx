import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface AppointmentAlertProps {
  highlightedLabel: string;
  unlightedLabel: string;
  isHighlighted: boolean;
}

export function AppointmentAlert({
  highlightedLabel,
  unlightedLabel,
  isHighlighted,
}: AppointmentAlertProps) {
  const handleOnAppointmentClick = () => {

  }
  return (
    <TouchableOpacity
      onPress={handleOnAppointmentClick}
      activeOpacity={0.7}
      style={isHighlighted ? styles.highlightedContainer : styles.container}
    >
      <Text style={[styles.highlightedLabel, isHighlighted && styles.mostRecentAppointmentHighlightedLabel]}>{highlightedLabel}</Text> 
      <Text style={[styles.unlightedLabel, isHighlighted && styles.mostRecentAppointmentUnlightedLabelLabel]}>{unlightedLabel}</Text>
    </TouchableOpacity>
  );
}
