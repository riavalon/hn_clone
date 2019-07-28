import styled from 'styled-components';

const GREY = '#666';
const HIGHLIGHT1 = '#008aff';
const HIGHLIGHT2 = '#FFA055';
const BODY_BG = '#f1f1f1';

export const Body = styled.div`
  background: ${BODY_BG};
`;

export const NewsCard = styled.a`
  display: block;
  text-decoration: none;
  font-family: sans-serif;
  padding: 1rem;
  position: relative;
  margin: 1rem 1rem 2rem;
  border: 2px solid rgba(0,0,0,0.3);
  width: 600px;
  transition: border-color .2s ease;

  &:hover {
    border-color: ${({ isShowHN }) => isShowHN ? HIGHLIGHT2 : HIGHLIGHT1 };

    #card-votes {
      background: ${({ isShowHN }) => isShowHN ? HIGHLIGHT2 : HIGHLIGHT1 };
    }

    #card-link {
      color: ${({ isShowHN }) => isShowHN ? HIGHLIGHT2 : HIGHLIGHT1 };
    }

    #card-meta {
      color: ${({ isShowHN }) => isShowHN ? HIGHLIGHT2 : HIGHLIGHT1 };
    }
  }
`;

export const CardLink = styled.span`
  display: block;
  font-size: 28px;
  margin-bottom: .5rem;
  color: ${GREY};
  transition: color .2s ease;
`;

export const CardMetadata = styled.div`
  display: flex;
  align-items: center;
  color: #999;
  font-weight: bold;
  font-size: 14px;
`;

export const CardMetaDate = styled.div`
  margin-right: 2rem;
`;

export const CardVotes = styled.span`
  top: -17px;
  left: -17px;
  font-weight: bolder;
  font-size: 20px;
  background: ${GREY};
  color: white;
  padding: .5rem;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: background .2s ease;
`;