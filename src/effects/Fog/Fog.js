import style from "./Fog.module.css";

export const Fog = ({ opacity }) => {
  return (
    <div className={style.fogwrapper} style={{ opacity }}>
      <div className={style.foglayer_01}>
        <div className={style.image01}></div>
        <div className={style.image02}></div>
      </div>
      <div className={style.foglayer_02}>
        <div className={style.image01}></div>
        <div className={style.image02}></div>
      </div>
      <div className={style.foglayer_03}>
        <div className={style.image01}></div>
        <div className={style.image02}></div>
      </div>
    </div>
  );
};
