import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioForm from "react-native-simple-radio-button";
import {
  ActivityIndicator,
  View,
  Text,
  Button,
  TouchableOpacity,
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

  const [pageNumberLimit, setPageNumberLimit] = useState({
    pageNumber: 1,
    limit: 4,
  });

  useEffect(() => {
    dispatch(pollList(pageNumberLimit));
  }, [pageNumberLimit]);

  return (
    <View>
      <Header />
      <View style={pollListStyles.containerAddPollButton}>
        {user && user.user.roleId === 1 && (
          <TouchableOpacity onPress={() => {}}>
            <Text style={pollListStyles.showMoreButtonText}>Add Poll</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={pollListStyles.container}>
        {pollQuestions &&
          pollQuestions.map((pollQuestion, index) => (
            <View key={pollQuestion.id}>
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
              </View>
              {pollQuestion.optionList.map((option) => {
                return (
                  <View style={pollListStyles.radioContainer} key={option.id}>
                    <RadioForm
                      buttonSize={10}
                      radio_props={[
                        { label: option.optionTitle, value: option.id },
                      ]}
                      // onPress={(value) => {}}...commented for later use
                    />
                    <Text style={pollListStyles.voteCount}>
                      {option.voteCount.length} Votes
                    </Text>
                  </View>
                );
              })}
            </View>
          ))}
        {loading && (
          <View>
            <ActivityIndicator size="large" />
          </View>
        )}
        <View style={pollListStyles.containerAddPollButton}>
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
            <Text style={pollListStyles.showMoreButtonText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PollList;
