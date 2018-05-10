import { reducer as SingleOptionQuestions} from 'Connected/SingleOptionQuestions';
//import { reducer as MultOptionsQuestions } from 'Connected/MultOptionsQuestions';
import { reducer as UserManager } from 'Connected/UserManager';
import { reducer as EnglishArticle } from 'Connected/EnglishArticle';
import { reducer as SingleSubjectTest } from 'Connected/SingleSubjectTest';
import { reducer as ButtonExpand } from 'Connected/ButtonExpand';
import { reducer as WriteContent } from 'Connected/WriteContent';
import { reducer as Navigation } from 'Connected/Navigation';
import { reducer as WriteKnowledge } from 'Connected/WriteKnowledge';
import { reducer as PortTest } from 'Connected/PortTest';
import { reducer as SubjectSelect } from 'Connected/SubjectSelect';
import { reducer as ZhentiPerYearTongji } from 'Connected/ZhentiPerYearTongji';
import { reducer as ZhentiAllYearTongji } from 'Connected/ZhentiAllYearTongji';
import { reducer as PageDesign } from 'Connected/PageDesign';
import { reducer as LearningTypeSelect } from 'Connected/LearningTypeSelect';
//import { reducer as ... } from 'Connected/...';

export default {
  SingleOptionQuestions: SingleOptionQuestions,
  //MultOptionsQuestions: MultOptionsQuestions,
  UserManager: UserManager,
  EnglishArticle: EnglishArticle,
  SingleSubjectTest: SingleSubjectTest,
  ButtonExpand: ButtonExpand,
  WriteContent: WriteContent,
  WriteKnowledge: WriteKnowledge,
  PortTest: PortTest,
  SubjectSelect: SubjectSelect,
  ZhentiPerYearTongji: ZhentiPerYearTongji,
  ZhentiAllYearTongji: ZhentiAllYearTongji,
  PageDesign: PageDesign,
  LearningTypeSelect: LearningTypeSelect

  //others
};
