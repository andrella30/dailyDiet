import { useFocusEffect } from "@react-navigation/native";
import { Container, DateTitle, DietStatus, HourText, MealCard, TitleText } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { mealsGetAll } from "@storage/meals/mealsGetAll";

import { FlatList } from "react-native";
import React from "react";
import { Meal, MealsDiet } from "@utils/types";

type Props = {
    mealsDiet: Meal[]
    onPress: (meal: MealsDiet, diet: number) => void;
}



export default function MealsList({ mealsDiet, onPress } : Props) {
    
    return (
        <Container>
            <FlatList
                keyExtractor={(item) => item.date}
                data={mealsDiet}
                renderItem={({item}) => {
                    return (
                        <>
                            <DateTitle> {item.date} </DateTitle>
                            {item.meals.map((mealitens) => {
                                return (
                                    <MealCard onPress={() => onPress(mealitens, item.id)}>
                                        <HourText> {mealitens.hour}  | </HourText>
                                        <TitleText> {mealitens.name} </TitleText>
                                        <DietStatus isDiet={mealitens.isDiet} />
                                    </MealCard> 
                                )
                            })}
                        </>
                    )
                }}
            > 
            </FlatList>
        </Container>
    )
}