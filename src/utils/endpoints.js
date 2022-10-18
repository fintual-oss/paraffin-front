export const endpoints = (operationId, param) => {
  const baseUrl = 'http://localhost:3001';
  const apiBaseUrl = 'http://localhost:3001/api';

  const endpointsList = {
    curriculum: apiBaseUrl + `/curriculums/${param}`,
    learningUnit: apiBaseUrl + `/learning_units/${param}`,
    resource: apiBaseUrl + `/resources/${param}`,
    curriculumLearningUnits: apiBaseUrl + `/curriculums/${param}/learning_units`,
    isLearningUnitCompleted: apiBaseUrl + `/learning_units/${param}/completed`,
    learningUnitResources: apiBaseUrl + `/learning_units/${param}/resources`,
    resourceEvaluation: apiBaseUrl + `/resources/${param}/evaluation`,
    resourceEvaluations: apiBaseUrl + `/resources/${param}/resource_evaluations`,
    resourceAverage: apiBaseUrl + `/resources/${param}/average_evaluation`,
    currentUser: apiBaseUrl + `/current_user`,
    signOut: baseUrl + `/users/sign_out`,
  };

  return endpointsList[operationId];
};
