export const endpoints = (operationId, param) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}`;
  const apiBaseUrl = baseUrl + '/api';

  const endpointsList = {
    curriculum: apiBaseUrl + `/curriculums/${param}`,
    cycle: apiBaseUrl + `/cycles/${param}`,
    learningUnit: apiBaseUrl + `/learning_units/${param}`,
    learningUnitSuccessions:
      apiBaseUrl + `/cycles/${param}/learning_unit_successions`,
    cyclesOfCurriculum: apiBaseUrl + `/curriculums/${param}/cycles`,
    resource: apiBaseUrl + `/resources/${param}`,
    curriculumLearningUnits:
      apiBaseUrl + `/curriculums/${param}/learning_units`,
    cycleLearningUnits: apiBaseUrl + `/cycles/${param}/learning_units`,
    isLearningUnitCompleted: apiBaseUrl + `/learning_units/${param}/completed`,
    learningUnitResources: apiBaseUrl + `/learning_units/${param}/resources`,
    resourceEvaluation: apiBaseUrl + `/resources/${param}/evaluation`,
    resourceEvaluations:
      apiBaseUrl + `/resources/${param}/resource_evaluations`,
    resourceAverage: apiBaseUrl + `/resources/${param}/average_evaluation`,
    currentUser: apiBaseUrl + `/current_user`,
    signOut: baseUrl + `/users/sign_out`,
  };

  return endpointsList[operationId];
};
