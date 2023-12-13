import { useMemo, forwardRef, useState, useCallback } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import colors from "tailwindcss/colors";
import { Pressable, TextInput, View } from "react-native";
import CustomText from "./CustomText";
import { Rating } from "@kolking/react-native-rating";

const CreateReviewBottomSheet = forwardRef(
  ({ title, options, onSelect }, ref) => {
    const snapPoints = useMemo(() => ["88%"], []);
    const [score, setScore] = useState(0);
    const [content, setContent] = useState("");

    const handleChange = useCallback(
      (value) => {
        setScore(value);
      },
      [score],
    );

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        enablePanDownToClose
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: "#10181f" }}
        handleIndicatorStyle={{ backgroundColor: colors.teal[800] }}
      >
        <View className="flex-row items-center justify-between px-3 py-2">
          <CustomText variant="h4" className="text-accentDark">
            Create review
          </CustomText>
          <Pressable
            onPress={() => ref.current.close()}
            className="rounded-full bg-accentDark px-3 py-2"
          >
            <CustomText variant="caption" className="text-zinc-300">
              Close
            </CustomText>
          </Pressable>
        </View>

        <View className="mt-4 items-center gap-2">
          <Rating
            size={40}
            rating={score}
            scale={1}
            onChange={handleChange}
            spacing={10}
            fillColor={colors.teal[500]}
            touchColor={colors.teal[700]}
          />
          <CustomText variant="h5" className="text-baseLight">
            Score of {score}/5
          </CustomText>
        </View>
        <View className="flex-1 gap-4 px-3 pb-6 pt-2">
          <CustomText variant="h6" className="text-baseLight">
            Review
          </CustomText>
          <View className="flex-1 rounded-lg border border-teal-700 p-4">
            <TextInput
              value={content}
              onChangeText={setContent}
              placeholder="Begin writing your review..."
              placeholderTextColor={colors.teal[700]}
              multiline
              className="w-full font-interRegular text-lg text-baseLight"
            />
          </View>
          <Pressable className="items-center justify-center rounded-full bg-accentDark py-4">
            <CustomText variant="h5" className="text-light">
              Create
            </CustomText>
          </Pressable>
        </View>
      </BottomSheet>
    );
  },
);

export default CreateReviewBottomSheet;