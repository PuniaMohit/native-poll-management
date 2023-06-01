import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioForm from "react-native-simple-radio-button";
import {
  ActivityIndicator,
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import pollList from "../../../redux/pollList/actions/pollList";
import Header from "../Header/header";
import pollListStyles from "./pollListStyles";

const PollList = () => {
  const pollQuestions = useSelector((state) => state.pollList.pollList);
  const loading = useSelector((state) => state.pollList.loading);
  const addedDataArrayLength = useSelector(
    (state) => state.pollList.addedDataArrayLength
  );
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const [radioButtonArray, setRadioButtonArray] = useState([]);

  const [pageNumberLimit, setPageNumberLimit] = useState({
    pageNumber: 1,
    limit: 4,
  });
  console.log(radioButtonArray);
  useEffect(() => {
    dispatch(pollList(pageNumberLimit));
  }, [pageNumberLimit]);

  useEffect(() => {
    if (pollQuestions) {
      const updatedRadioButtonArray = pollQuestions.map((pollQuestion) => {
        return pollQuestion.optionList.map((option, index) => ({
          label: [
            option.optionTitle,
            "    ",
            option.voteCount.length + "  Votes",
          ],
          value: option.id,
        }));
      });
      setRadioButtonArray(updatedRadioButtonArray);
    }
  }, [pollQuestions]);

  return (
    <View>
      <Header />
      <View style={pollListStyles.containerAddPollButton}>
        {user && user.user.roleId === 1 && (
          <TouchableOpacity
            style={pollListStyles.addPollButton}
            onPress={() => {}}
          >
            <Text style={pollListStyles.showMoreButtonText}>Add Poll</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView>
        <View>
          {pollQuestions &&
            pollQuestions.map((pollQuestion, index) => (
              <View
                key={pollQuestion.id}
                style={pollListStyles.containerPollList}
              >
                <View style={pollListStyles.title}>
                  <Text style={pollListStyles.pollTitle}>
                    {index + 1}. {pollQuestion.title}
                  </Text>
                  {user && user.user.roleId === 1 && (
                    <View style={pollListStyles.editButtons}>
                      {/* commented for further reference */}
                      {/* <Button
                  title="Delete"
                  onPress={() => handleDeletePoll(pollQuestion.id)}
                /> */}
                    </View>
                  )}
                  <View style={pollListStyles.radioContainer}>
                    <View>
                      <RadioForm
                        buttonSize={10}
                        radio_props={radioButtonArray[index]}
                        initial={0}
                        onPress={(value) => {}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          {loading && (
            <View>
              <ActivityIndicator size="large" />
            </View>
          )}
        </View>
        <View style={pollListStyles.containerAddMoreButton}>
          <TouchableOpacity
            style={
              addedDataArrayLength < 4
                ? pollListStyles.showMoreDisabledButton
                : pollListStyles.showMorePollButton
            }
            disabled={addedDataArrayLength < 4}
            onPress={() => {
              setPageNumberLimit((prevState) => ({
                ...prevState,
                pageNumber: prevState.pageNumber + 1,
              }));
            }}
          >
            <Text style={pollListStyles.showMoreButtonText}>More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PollList;
