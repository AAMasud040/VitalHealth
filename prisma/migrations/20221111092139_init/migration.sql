-- CreateTable
CREATE TABLE `info` (
    `serial` INTEGER NOT NULL AUTO_INCREMENT,
    `goalsforweightloss` VARCHAR(255) NOT NULL,
    `targetWeight` INTEGER NOT NULL,
    `HistoryofHealthIssues` VARCHAR(10000) NOT NULL,
    `Motivation` VARCHAR(10000) NOT NULL,
    `foodforbreakfast` VARCHAR(5000) NOT NULL,
    `foodforlunch` VARCHAR(5000) NOT NULL,
    `foodfordinner` VARCHAR(5000) NOT NULL,
    `morningSnack` VARCHAR(5000) NOT NULL,
    `eveningSnack` VARCHAR(5000) NOT NULL,
    `nightSnacks` VARCHAR(5000) NOT NULL,
    `TimeforBreakfast` DATETIME(3) NOT NULL,
    `TimeforLunch` DATETIME(3) NOT NULL,
    `TimeforDinner` DATETIME(3) NOT NULL,
    `timeForMsnacks` DATETIME(3) NOT NULL,
    `timeForEsnacks` DATETIME(3) NOT NULL,
    `timeForNsnacks` DATETIME(3) NOT NULL,
    `glassesofWate` INTEGER NOT NULL,
    `exercise` VARCHAR(5000) NOT NULL,

    PRIMARY KEY (`serial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `regularInfo` (
    `Serial` INTEGER NOT NULL AUTO_INCREMENT,
    `SleepTime` VARCHAR(5000) NOT NULL,
    `BloodpressureMorning` VARCHAR(5000) NOT NULL,
    `weight` INTEGER NOT NULL,
    `breakfast` VARCHAR(5000) NOT NULL,
    `b_time` VARCHAR(255) NOT NULL,
    `b_Water` INTEGER NOT NULL,
    `morningSnacks` VARCHAR(5000) NOT NULL,
    `m_time` VARCHAR(255) NOT NULL,
    `m_Water` INTEGER NOT NULL,
    `lunch` VARCHAR(5000) NOT NULL,
    `l_time` VARCHAR(255) NOT NULL,
    `l_Water` INTEGER NOT NULL,
    `eveningSnacks` VARCHAR(5000) NOT NULL,
    `e_time` VARCHAR(255) NOT NULL,
    `e_Water` INTEGER NOT NULL,
    `dinner` VARCHAR(5000) NOT NULL,
    `d_time` VARCHAR(255) NOT NULL,
    `d_Water` INTEGER NOT NULL,
    `nightSnacks` VARCHAR(5000) NOT NULL,
    `n_time` VARCHAR(255) NOT NULL,
    `n_Water` INTEGER NOT NULL,
    `BloodpressureEvening` VARCHAR(5000) NOT NULL,

    PRIMARY KEY (`Serial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
