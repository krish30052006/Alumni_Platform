import passport from 'passport';
import { apiResponse } from '../utils/apiResponse.js';

export const authenticate = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    
    if (!user) {
      return apiResponse(res, 401, false, 'Unauthorized access', null);
    }
    
    req.user = user;
    next();
  })(req, res, next);
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    return apiResponse(res, 403, false, 'Access forbidden. Admin rights required.', null);
  }
};

export const authorizeModerator = (req, res, next) => {
  if (req.user && ['admin', 'moderator'].includes(req.user.role)) {
    next();
  } else {
    return apiResponse(res, 403, false, 'Access forbidden. Moderator rights required.', null);
  }
}; 