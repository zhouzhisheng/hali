package com.core.hali.exception;

import org.springframework.http.HttpStatus;

/**
 * 
 * Exception caused by accessing forbidden resources.
 * @author zhisheng.zhou
 *
 */
public class ForbiddenException extends HaloException {

    public ForbiddenException(String message) {
        super(message);
    }

    public ForbiddenException(String message, Throwable cause) {
        super(message, cause);
    }

    @Override
    public HttpStatus getStatus() {
        return HttpStatus.FORBIDDEN;
    }
}
