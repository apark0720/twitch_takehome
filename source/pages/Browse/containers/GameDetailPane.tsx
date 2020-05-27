import * as React from 'react';
import { connect } from 'react-redux';
import { SmallHeader } from 'ventura/components/atoms/Headers/SmallHeader';
import { Tag } from 'ventura/components/atoms/Tag/Tag';
import { BulletPointList } from 'ventura/components/molecules/BulletPointList/BulletPointList';
import { TagGroup } from 'ventura/components/molecules/TagGroup/TagGroup';
import { DetailPane } from 'ventura/components/organisms/DetailPane/DetailPane';
import { IStore } from 'ventura/globals/types';
import './GameDetailPane.scss';

type IReduxProps = ReturnType<typeof mapStateToProps>;

interface IProps extends IReduxProps {}

const GameDetailPaneContainer: React.FC<IProps> = ({ selectedGame }) => {
  const fileNames = selectedGame.details.fileNames;
  const categorySectionNames = selectedGame.details.categorySectionNames.map(
    (categorySectionName: string, i: number) => <Tag key={`${i}-${categorySectionName}`} text={categorySectionName} />,
  );

  return (
    <DetailPane hasSelectedGame={selectedGame.name !== ''}>
      <section id="details">
        <SmallHeader text={`${selectedGame.details.slug}`} isAllCaps={true} />
        {selectedGame.details.slug.length > 10 && <br />}
        <SmallHeader text="files" isAllCaps={true} />
        {fileNames.length ? (
          <BulletPointList listItems={fileNames} />
        ) : (
          <BulletPointList listItems={['none']} />
        )}
        <SmallHeader text="categories" isAllCaps={true} />
        {categorySectionNames.length ? (
          <div id="detail-pane-labels">
            <TagGroup>{categorySectionNames}</TagGroup>
          </div>
        ) : (
          <BulletPointList listItems={['none']} />
        )}
      </section>
    </DetailPane>
  );
};

const mapStateToProps = (store: IStore) => ({
  selectedGame: store.games.selectedGame,
});

export const GameDetailPane = connect(mapStateToProps)(GameDetailPaneContainer);
