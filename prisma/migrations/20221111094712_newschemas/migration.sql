-- CreateTable
CREATE TABLE `info` (
    `serial` INTEGER NOT NULL AUTO_INCREMENT,
    `goalsforweightloss` VARCHAR(255) NOT NULL,
    `targetWeight` INTEGER NOT NULL,
    `HistoryofHealthIssues` TEXT NOT NULL,
    `Motivation` TEXT NOT NULL,
    `foodforbreakfast` TEXT NOT NULL,
    `foodforlunch` TEXT NOT NULL,
    `foodfordinner` TEXT NOT NULL,
    `morningSnack` TEXT NOT NULL,
    `eveningSnack` TEXT NOT NULL,
    `nightSnacks` TEXT NOT NULL,
    `TimeforBreakfast` DATETIME(3) NOT NULL,
    `TimeforLunch` DATETIME(3) NOT NULL,
    `TimeforDinner` DATETIME(3) NOT NULL,
    `timeForMsnacks` DATETIME(3) NOT NULL,
    `timeForEsnacks` DATETIME(3) NOT NULL,
    `timeForNsnacks` DATETIME(3) NOT NULL,
    `glassesofWate` INTEGER NOT NULL,
    `exercise` TEXT NOT NULL,

    PRIMARY KEY (`serial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `regularInfo` (
    `Serial` INTEGER NOT NULL AUTO_INCREMENT,
    `SleepTime` TEXT NOT NULL,
    `BloodpressureMorning` TEXT NOT NULL,
    `weight` INTEGER NOT NULL,
    `breakfast` TEXT NOT NULL,
    `b_time` VARCHAR(255) NOT NULL,
    `b_Water` INTEGER NOT NULL,
    `morningSnacks` TEXT NOT NULL,
    `m_time` VARCHAR(255) NOT NULL,
    `m_Water` INTEGER NOT NULL,
    `lunch` TEXT NOT NULL,
    `l_time` VARCHAR(255) NOT NULL,
    `l_Water` INTEGER NOT NULL,
    `eveningSnacks` TEXT NOT NULL,
    `e_time` VARCHAR(255) NOT NULL,
    `e_Water` INTEGER NOT NULL,
    `dinner` TEXT NOT NULL,
    `d_time` VARCHAR(255) NOT NULL,
    `d_Water` INTEGER NOT NULL,
    `nightSnacks` TEXT NOT NULL,
    `n_time` VARCHAR(255) NOT NULL,
    `n_Water` INTEGER NOT NULL,
    `BloodpressureEvening` TEXT NOT NULL,

    PRIMARY KEY (`Serial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
