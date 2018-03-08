import { combineReducers } from 'redux';
import WindowManager from 'WindowManager/reducer';
import { reducer as SingleOptionQuestions} from 'Connected/SingleOptionQuestions';
//import { reducer as MultOptionsQuestions } from 'Connected/MultOptionsQuestions';
import { reducer as UserManager } from 'Connected/UserManager';
import { reducer as EnglishArticle } from 'Connected/EnglishArticle';
import { reducer as SingleSubjectTest } from 'Connected/SingleSubjectTest';
import { reducer as ButtonExpand } from 'Connected/ButtonExpand';
import { reducer as WriteContent } from 'Connected/WriteContent';

//import { reducer as ... } from 'Connected/...';

export default combineReducers({
  WindowManager: WindowManager,
  SingleOptionQuestions: SingleOptionQuestions,
  //MultOptionsQuestions: MultOptionsQuestions,
  UserManager: UserManager,
  EnglishArticle: EnglishArticle,
  SingleSubjectTest: SingleSubjectTest,
  ButtonExpand: ButtonExpand,
  WriteContent: WriteContent
  //others
});
