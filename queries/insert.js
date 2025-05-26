const queries = {
  standings: `
    INSERT INTO standings (position, team_name, points, games_played, games_win, games_draw, games_lost, logo) VALUES
    (1, 'Manchester City', 91, 38, 28, 7, 3, 'https://media.api-sports.io/football/teams/50.png'),
    (2, 'Arsenal', 89, 38, 28, 5, 5, 'https://media.api-sports.io/football/teams/42.png'),
    (3, 'Liverpool', 82, 38, 24, 10, 4, 'https://media.api-sports.io/football/teams/40.png'),
    (4, 'Aston Villa', 68, 38, 20, 8, 10, 'https://media.api-sports.io/football/teams/66.png'),
    (5, 'Tottenham', 66, 38, 20, 6, 12, 'https://media.api-sports.io/football/teams/47.png'),
    (6, 'Chelsea', 63, 38, 18, 9, 11, 'https://media.api-sports.io/football/teams/49.png'),
    (7, 'Newcastle', 60, 38, 18, 6, 14, 'https://media.api-sports.io/football/teams/34.png'),
    (8, 'Manchester United', 60, 38, 18, 6, 14, 'https://media.api-sports.io/football/teams/33.png'),
    (9, 'West Ham', 52, 38, 14, 10, 14, 'https://media.api-sports.io/football/teams/48.png'),
    (10, 'Crystal Palace', 49, 38, 13, 10, 15, 'https://media.api-sports.io/football/teams/52.png'),
    (11, 'Brighton', 48, 38, 12, 12, 14, 'https://media.api-sports.io/football/teams/51.png'),
    (12, 'Bournemouth', 48, 38, 13, 9, 16, 'https://media.api-sports.io/football/teams/35.png'),
    (13, 'Fulham', 47, 38, 13, 8, 17, 'https://media.api-sports.io/football/teams/36.png'),
    (14, 'Wolves', 46, 38, 13, 7, 18, 'https://media.api-sports.io/football/teams/39.png'),
    (15, 'Everton', 40, 38, 13, 9, 16, 'https://media.api-sports.io/football/teams/45.png'),
    (16, 'Brentford', 39, 38, 10, 9, 19, 'https://media.api-sports.io/football/teams/55.png'),
    (17, 'Nottingham Forest', 32, 38, 9, 9, 20, 'https://media.api-sports.io/football/teams/65.png'),
    (18, 'Luton', 26, 38, 6, 8, 24, 'https://media.api-sports.io/football/teams/1359.png'),
    (19, 'Burnley', 24, 38, 5, 9, 24, 'https://media.api-sports.io/football/teams/44.png'),
    (20, 'Sheffield Utd', 16, 38, 3, 7, 28, 'https://media.api-sports.io/football/teams/62.png')
  `,

  matches: `
  INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Burnley', 44, 'https://media.api-sports.io/football/teams/44.png',
    'Manchester City', 50, 'https://media.api-sports.io/football/teams/50.png',
    0, 3, '2023-08-11 19:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Arsenal', 42, 'https://media.api-sports.io/football/teams/42.png',
    'Nottingham Forest', 65, 'https://media.api-sports.io/football/teams/65.png',
    2, 1, '2023-08-12 11:30:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Bournemouth', 35, 'https://media.api-sports.io/football/teams/35.png',
    'West Ham', 48, 'https://media.api-sports.io/football/teams/48.png',
    1, 1, '2023-08-12 14:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Everton', 45, 'https://media.api-sports.io/football/teams/45.png',
    'Fulham', 36, 'https://media.api-sports.io/football/teams/36.png',
    0, 1, '2023-08-12 14:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Brighton', 51, 'https://media.api-sports.io/football/teams/51.png',
    'Luton', 1359, 'https://media.api-sports.io/football/teams/1359.png',
    4, 1, '2023-08-12 14:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Sheffield Utd', 62, 'https://media.api-sports.io/football/teams/62.png',
    'Crystal Palace', 52, 'https://media.api-sports.io/football/teams/52.png',
    0, 1, '2023-08-12 14:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Newcastle', 34, 'https://media.api-sports.io/football/teams/34.png',
    'Aston Villa', 66, 'https://media.api-sports.io/football/teams/66.png',
    5, 1, '2023-08-12 16:30:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Brentford', 55, 'https://media.api-sports.io/football/teams/55.png',
    'Tottenham', 47, 'https://media.api-sports.io/football/teams/47.png',
    2, 2, '2023-08-13 13:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Chelsea', 49, 'https://media.api-sports.io/football/teams/49.png',
    'Liverpool', 40, 'https://media.api-sports.io/football/teams/40.png',
    1, 1, '2023-08-13 15:30:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Manchester United', 33, 'https://media.api-sports.io/football/teams/33.png',
    'Wolves', 39, 'https://media.api-sports.io/football/teams/39.png',
    1, 0, '2023-08-14 19:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Nottingham Forest', 65, 'https://media.api-sports.io/football/teams/65.png',
    'Sheffield Utd', 62, 'https://media.api-sports.io/football/teams/62.png',
    2, 1, '2023-08-18 18:45:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Fulham', 36, 'https://media.api-sports.io/football/teams/36.png',
    'Brentford', 55, 'https://media.api-sports.io/football/teams/55.png',
    0, 3, '2023-08-19 14:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Wolves', 39, 'https://media.api-sports.io/football/teams/39.png',
    'Brighton', 51, 'https://media.api-sports.io/football/teams/51.png',
    1, 4, '2023-08-19 14:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Liverpool', 40, 'https://media.api-sports.io/football/teams/40.png',
    'Bournemouth', 35, 'https://media.api-sports.io/football/teams/35.png',
    3, 1, '2023-08-19 14:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Tottenham', 47, 'https://media.api-sports.io/football/teams/47.png',
    'Manchester United', 33, 'https://media.api-sports.io/football/teams/33.png',
    2, 0, '2023-08-19 16:30:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Manchester City', 50, 'https://media.api-sports.io/football/teams/50.png',
    'Newcastle', 34, 'https://media.api-sports.io/football/teams/34.png',
    1, 0, '2023-08-19 19:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Aston Villa', 66, 'https://media.api-sports.io/football/teams/66.png',
    'Everton', 45, 'https://media.api-sports.io/football/teams/45.png',
    4, 0, '2023-08-20 13:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'West Ham', 48, 'https://media.api-sports.io/football/teams/48.png',
    'Chelsea', 49, 'https://media.api-sports.io/football/teams/49.png',
    3, 1, '2023-08-20 15:30:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Crystal Palace', 52, 'https://media.api-sports.io/football/teams/52.png',
    'Arsenal', 42, 'https://media.api-sports.io/football/teams/42.png',
    0, 1, '2023-08-21 19:00:00');

INSERT INTO matches (home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date) VALUES (
    'Chelsea', 49, 'https://media.api-sports.io/football/teams/49.png',
    'Luton', 1359, 'https://media.api-sports.io/football/teams/1359.png',
    3, 0, '2023-08-25 19:00:00');
  `
};
module.exports = queries;