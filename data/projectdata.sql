CREATE TABLE admin_info (
    admin_info_id         SERIAL NOT NULL PRIMARY KEY,
    admin_username        VARCHAR(30) NOT NULL,
    admin_password        VARCHAR(30) NOT NULL
);
CREATE TABLE sheet (
    sheet_id         SERIAL PRIMARY KEY,
    sheet_name       VARCHAR(30) NOT NULL,
    sheet_subname    VARCHAR(30) NOT NULL,
    sheet_image           VARCHAR(500) NOT NULL,
    sheet_health          NUMERIC NOT NULL,
    sheet_per_health      NUMERIC NOT NULL,
    sheet_damage          NUMERIC NOT NULL,
    sheet_per_damage      NUMERIC NOT NULL,
    sheet_regen           NUMERIC NOT NULL,
    sheet_per_regen       NUMERIC NOT NULL,
    sheet_armor           NUMERIC NOT NULL,
    sheet_per_armor       NUMERIC NOT NULL,
    sheet_resist          NUMERIC NOT NULL,
    sheet_per_resist      NUMERIC NOT NULL,
    sheet_movement        INTEGER NOT NULL,
    sheet_attackspeed     NUMERIC NOT NULL,
    sheet_per_attackspeed NUMERIC NOT NULL
);
